import * as React from 'react';
import styled from 'styled';

export interface Props {
  title: string;
  text?: string;
  right?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  icon: JSX.Element;
}

const Item: React.SFC<Props> = ({ icon, title, text, right, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      {text && <Text>{text}</Text>}
      {right && <Right>{right}</Right>}
    </Wrapper>
  );
};

Item.defaultProps = {
  text: undefined,
  right: null,
  onClick: e => null,
};

const Wrapper = styled<{}, 'a'>('a')``;

const Icon = styled<{}, 'div'>('div')``;

const Title = styled<{}, 'h4'>('h4')``;

const Text = styled<{}, 'p'>('p')``;

const Right = styled<{}, 'div'>('div')``;

export default Item;
