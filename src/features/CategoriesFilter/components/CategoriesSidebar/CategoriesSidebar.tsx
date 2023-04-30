import React, { useCallback, useEffect, useMemo } from 'react';

import { useFetchAllProductsQuery, useFetchProductsByCategoryQuery } from 'entities/Product';
import { useAppDispatch, useAppSelector } from 'shared/helpers/hooks/redux';

import {
  changeCategory,
  addProductsToFilterList,
  removeProductsFromFilterList,
} from '../../store/categoriesSlice';

import styles from './CategoriesSidebar.module.scss';

export const CategoriesSidebar: React.FunctionComponent = () => {
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
    <aside className={styles.root}>
      <ul>
        <li>
          <button type="button" onClick={handleAllCategorySelected}>All items</button>
        </li>
        {
          categories.map((category) => (
            <li key={category}>
              <button type="button" data-category={category} onClick={handleCategorySelected}>
                {category}
              </button>
            </li>
          ))
        }
      </ul>
    </aside>
  );
};
