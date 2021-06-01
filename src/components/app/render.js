import React, { useState } from 'react';

import { Ingredient } from 'components/widgets';

import INGREDIENTS from './mock';

export const renderIngredient = ingredient => (
  <Ingredient key={ingredient.src} {...ingredient} />
);

export default ({ className }) => {
  const [ingredients] = useState(INGREDIENTS);

  return <div className={className}>{ingredients.map(renderIngredient)}</div>;
};
