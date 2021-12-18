import Head from "next/head";

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>

      <section>
        <h1 className="py-20 text-center text-2xl md:text-4xl font-bold tracking-tight leading-normal md:leading-normal">
          Oops, something went wrong.
          <br />
          Please try again shortly.
        </h1>
      </section>
    </>
  );
};

export default ErrorPage;
