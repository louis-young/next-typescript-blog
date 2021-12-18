import Head from "next/head";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Oops - Page Not Found</title>
      </Head>

      <section>
        <h1 className="py-20 text-center text-2xl md:text-4xl font-bold tracking-tight leading-normal md:leading-normal">
          Oops, we couldn't find what you
          <br /> were looking for.
        </h1>
      </section>
    </>
  );
};

export default NotFoundPage;
