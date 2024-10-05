import React from "react";
import styled from "styled-components/native";

interface ContainerProps {
  backgroundColor: string;
}

const Container = styled.View<ContainerProps>`
  width: 464px;
  height: 250px;
  border-radius: 110px;
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
  gap: 8px;
  display: flex;
  margin-top: -130px;
  margin-left: -40px;
  margin-bottom: 40px;
`;

const CardTitle = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top: 170px;
`;

interface CategoryHeaderProps {
  title: string;
  color: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  color,
}) => {
  return (
    <Container backgroundColor={color}>
      <CardTitle>{title}</CardTitle>
    </Container>
  );
};
