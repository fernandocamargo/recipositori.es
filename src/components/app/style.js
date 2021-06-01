import styled from 'styled-components';

import { Ingredient } from 'components/widgets';

export default component => styled(component)`
  display: flex;
  margin: 1rem;

  ${Ingredient} {
    width: calc((100% - 13rem) / 14);

    &:not(:first-of-type) {
      margin-left: 1rem;
    }
  }
`;
