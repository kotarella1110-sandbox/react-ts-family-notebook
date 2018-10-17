import * as React from 'react';
import styled, { injectGlobal } from 'styled';
// https://github.com/reactjs/react-modal/issues/497
// https://github.com/reactjs/react-modal/issues/309
const ReactModal = require('react-modal');

interface Props extends ReactModal.Props {
  readonly className?: string;
  readonly header: React.ReactNode;
  readonly footer?: React.ReactNode;
}

const Modal: React.SFC<Props> = ({
  className,
  header,
  footer,
  children,
  ...props
}) => {
  const overlayClassName = `${className}__Overlay`;
  const contentClassName = `${className}__Content`;
  return (
    <ReactModal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}>
      <Header>{header}</Header>
      <Main>{children}</Main>
      {footer && <Footer>{footer}</Footer>}
    </ReactModal>
  );
};

injectGlobal`
  body.ReactModal__Body--open {
    overflow: hidden;
  }
`;

const Header = styled.header`
  grid-area: header;
`;

const Main = styled.main`
  grid-area: main;
  overflow: auto;
  -webkitoverflowscrolling: touch;
`;

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 16px;
`;

const ModalTemplate = styled(Modal)`
  &__Overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  &__Content {
    /* stylelint-disable declaration-colon-space-after, indentation */
    display: grid;
    grid-template-areas:
      'header'
      'main';
    grid-template-columns: 1fr;
    grid-template-rows:
      calc(${props => props.theme.sizeBase} * 6)
      calc(100vh - ${props => props.theme.sizeBase} * 6);

    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: ${props => props.theme.grayLighter};

    /* overflow: auto;
    webkitoverflowscrolling: touch; */
  }
`;

export default ModalTemplate;
