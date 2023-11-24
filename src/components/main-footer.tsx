import Link from "next/link";
import React from "react";

function MainFooter() {
  return (
    <footer className="border-t ">
      <div className="flex flex-col mx-auto px-4 lg:px-14 py-4  ">
        <div className="flex flex-grow flex-row items-center justify-between p-2 text-sm">
          <p className="font-light">
            Demo Dashboard With{" "}
            <Link
              href={"https://tremor.so"}
              className="font-semibold text-blue-600 hover:underline"
            >
              Tremor
            </Link>
          </p>
          <p className="font-light">
            made by{" "}
            <Link
              href={"https://github.com/ceedadev"}
              className="font-semibold text-neutral-600 hover:underline"
            >
              ceedadev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
