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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <ul className={styles.root}>
      <li className={styles.category}>
        <button
          type="button"
          onClick={handleAllCategorySelected}
          className={selectedCategory === '' ? styles.selected : ''}
        >
          All items
        </button>
      </li>
      {
          categories.map((category) => {
            const selected = selectedCategory === category ? styles.selected : '';
            return (
              <li key={category} className={styles.category}>
                <button
                  type="button"
                  data-category={category}
                  onClick={handleCategorySelected}
                  className={selected}
                >
                  {category}
                </button>
              </li>
            );
          })
        }
    </ul>
  );
};
