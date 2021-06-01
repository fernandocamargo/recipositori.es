import styled from 'styled-components';

export default component => styled(component)`
  position: relative;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  dl {
    dt {
      display: none;
    }

    dd {
      img {
        border: solid 1px rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        box-shadow: 0 8px 6px -6px rgb(0 0 0 / 25%);
        height: 100%;
        left: 0;
        object-fit: cover;
        object-position: center;
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  }
`;
