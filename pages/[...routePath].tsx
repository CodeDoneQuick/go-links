import React from 'react';
import { GetServerSideProps } from 'next';

interface Props {}

const LinkNotFound: React.FC<Props> = ({
}) => (
  <div>Not Found</div>
);

export default LinkNotFound;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const response = context.res;
  console.log(context.query)

  response.writeHead(302, {
    Location: "https://google.com",
  });

  response.end();

  /**
   * This return doesn't do anything actually.
   * The request is already ended at this point.
   **/
  return {};
};