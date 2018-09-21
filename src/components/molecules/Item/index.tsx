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
      <Left>{icon}</Left>
      <Center>
        <Title>{title}</Title>
        {text && <Text>{text}</Text>}
      </Center>
      {right && <Right>{right}</Right>}
    </Wrapper>
  );
};

Item.defaultProps = {
  text: undefined,
  right: null,
  onClick: e => null,
};

const Wrapper = styled<{}, 'a'>('a')`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: ${props => props.theme.textColor};
  min-height: 48px;
  background-color: ${props => props.theme.white};
`;

const Left = styled<{}, 'div'>('div')`
  margin: 0 8px 0 0;
  svg,
  div {
    width: 36px;
    height: 36px;
  }
`;

const Center = styled<{}, 'div'>('div')``;

const Title = styled<{}, 'h4'>('h4')`
  margin: 0;
  line-height: 1.5em;
`;

const Text = styled<{}, 'p'>('p')`
  margin: 0;
  line-height: 1.5em;
`;

const Right = styled<{}, 'div'>('div')`
  margin: 0 0 0 auto;
`;

export default Item;
