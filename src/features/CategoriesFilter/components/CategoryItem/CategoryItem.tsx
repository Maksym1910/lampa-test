import React from 'react';

import styles from './CategoryItem.module.scss';

interface ICategoryItemProps {
  category: string
  isSelected: boolean
  handleCategorySelected: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const CategoryItem: React.FunctionComponent<ICategoryItemProps> = (props) => {
  const { category, isSelected, handleCategorySelected } = props;
  const selectedStyle = isSelected ? styles.selected : '';

  return (
    <li className={styles.category}>
      <button
        type="button"
        data-category={category}
        onClick={handleCategorySelected}
        className={selectedStyle}
      >
        {category}
      </button>
    </li>
  );
};
