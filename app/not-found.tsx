import { Button } from "@components/ui/button";
import Link from "next/link";
import React from "react";

function Erro() {
  return (
    <section className="bg-white h-screen flex items-center justify-center dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link href="/">
            <Button className="mt-4" variant="secondary">
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Erro;
