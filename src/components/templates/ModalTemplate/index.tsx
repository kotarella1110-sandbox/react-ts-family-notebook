import * as React from 'react';
import styled, { injectGlobal } from 'styled';
// https://github.com/reactjs/react-modal/issues/497
// https://github.com/reactjs/react-modal/issues/309
const ReactModal = require('react-modal');

interface Props extends ReactModal.Props {
  className?: string;
  header: React.ReactNode;
  footer?: React.ReactNode;
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

const Header = styled.header``;

const Main = styled.main``;

const Footer = styled.footer``;

const ModalTemplate = styled(Modal)`
  &__Overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  &__Content {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: #fff;
    overflow: auto;
    webkitoverflowscrolling: touch;
  }
`;

export default ModalTemplate;
