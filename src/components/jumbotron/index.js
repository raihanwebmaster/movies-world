import React from 'react';
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Videos,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return (
    <Pane data-aos="fade-right" {...restProps}>
      {children}
    </Pane>
  );
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Jumbotron.Video = function JumbotronVideo({ ...restProps }) {
  return (
    <Videos
      autoPlay={true}
      loop={true}
      playsInline={true}
      {...restProps}
    ></Videos>
  );
};
