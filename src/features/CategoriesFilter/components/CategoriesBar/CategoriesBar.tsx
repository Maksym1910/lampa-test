import React, {
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import { useFetchAllProductsQuery, useFetchProductsByCategoryQuery } from 'entities/Product';
import { useAppDispatch, useAppSelector } from 'shared/helpers/hooks/redux';

import {
  changeCategory,
  addProductsToFilterList,
  removeProductsFromFilterList,
} from '../../store/categoriesSlice';

import styles from './CategoriesBar.module.scss';
import { CategoryItem } from '../CategoryItem/CategoryItem';

export const CategoriesBar: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { data } = useFetchAllProductsQuery();
  const categories = useMemo(
    () => [...new Set(data?.products.map((product) => product.category))],
    [data?.products],
  );
  const { selectedCategory } = useAppSelector((state) => state.categories);
  const {
    data: filteredProductsData,
    isLoading,
    isError,
  } = useFetchProductsByCategoryQuery(selectedCategory || undefined);

  useEffect(() => {
    if (!isLoading && filteredProductsData && selectedCategory) {
      dispatch(addProductsToFilterList(filteredProductsData.products));
    }
  }, [dispatch, isLoading, filteredProductsData, selectedCategory]);

  const handleAllCategorySelected = useCallback(() => {
    dispatch(removeProductsFromFilterList());
    dispatch(changeCategory(''));
  }, [dispatch]);

  const handleCategorySelected = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const category = event.currentTarget.dataset.category || '';
      dispatch(removeProductsFromFilterList());
      dispatch(changeCategory(category));
    },
    [dispatch],
  );

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <ul className={styles.root}>
      {!isLoading && (
        <CategoryItem
          category="All items"
          isSelected={selectedCategory === ''}
          handleCategorySelected={handleAllCategorySelected}
        />
      )}
      {
        categories.map((category) => (
          <CategoryItem
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            handleCategorySelected={handleCategorySelected}
          />
        ))
      }
    </ul>
  );
};
