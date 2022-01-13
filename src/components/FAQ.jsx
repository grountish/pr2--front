/* eslint-disable react/react-in-jsx-scope */
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import React from "react";
const GetStarted = () => {
  return (
    <>
      <div className="h-screen w-full flex bg-darkGray">
      <div className="max-w-screen-xl w-full m-auto">
        <h1 className="text-4xl pt-12 ml-16">FAQs:</h1>
        <div className="flex flex-col mt-4 text-center w-8/12 mx-auto ">
          <div className="container mx-auto">
            <div className="mb-8 overflow-hidden border-b border-t border-black ">
              <Disclosure as="div" className="p-4 border-b border-black">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <div className="flex  items-center">
                          <div
                            className={clsx("transition ease duration-250", {
                              "  text-primary-500": open,
                              "  text-black hover:text-secondary-400 ": !open,
                            })}
                          >
                            Get Matched with a Coach
                          </div>
                        </div>
                        <span className="flex items-center ml-6 h-7">
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={clsx(
                              "h-6 w-6 transform transition ease duration-500",
                              {
                                "-rotate-45 text-primary-500": open,
                                "rotate-0 text-black": !open,
                              }
                            )}
                          >
                            <path
                              d="M8.73518 11.432H0.96518V7.90405H8.73518V0.134047H12.2212V7.90405H20.0332V11.432H12.2212V19.202H8.73518V11.432Z"
                              className=" fill-current"
                            />
                          </svg>
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="py-6 mt-2  ">
                      <p className="text-base text-left ">
                        Answer a few more questions to help us match you with a
                        coach. The info you share will be reviewed by our Head
                        of Coaching, who makes the matches, and your coach.
                        <span className="underline"></span>
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="p-4 border-b border-black">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <div className="flex  items-center">
                          <div
                            className={clsx("transition ease duration-250", {
                              "  text-primary-500": open,
                              "  text-black hover:text-secondary-400 ": !open,
                            })}
                          >
                            Get Matched with a Coach
                          </div>
                        </div>
                        <span className="flex items-center ml-6 h-7">
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={clsx(
                              "h-6 w-6 transform transition ease duration-500",
                              {
                                "-rotate-45 text-primary-500": open,
                                "rotate-0 text-black": !open,
                              }
                            )}
                          >
                            <path
                              d="M8.73518 11.432H0.96518V7.90405H8.73518V0.134047H12.2212V7.90405H20.0332V11.432H12.2212V19.202H8.73518V11.432Z"
                              className=" fill-current"
                            />
                          </svg>
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="py-6 mt-2  ">
                      <p className="text-base text-left ">
                        Answer a few more questions to help us match you with a
                        coach. The info you share will be reviewed by our Head
                        of Coaching, who makes the matches, and your coach.
                        <span className="underline"></span>
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="p-4 border-b border-black">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <div className="flex  items-center">
                          <div
                            className={clsx("transition ease duration-250", {
                              "  text-primary-500": open,
                              "  text-black hover:text-secondary-400 ": !open,
                            })}
                          >
                            Get Matched with a Coach
                          </div>
                        </div>
                        <span className="flex items-center ml-6 h-7">
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={clsx(
                              "h-6 w-6 transform transition ease duration-500",
                              {
                                "-rotate-45 text-primary-500": open,
                                "rotate-0 text-black": !open,
                              }
                            )}
                          >
                            <path
                              d="M8.73518 11.432H0.96518V7.90405H8.73518V0.134047H12.2212V7.90405H20.0332V11.432H12.2212V19.202H8.73518V11.432Z"
                              className=" fill-current"
                            />
                          </svg>
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="py-6 mt-2  ">
                      <p className="text-base text-left ">
                        Answer a few more questions to help us match you with a
                        coach. The info you share will be reviewed by our Head
                        of Coaching, who makes the matches, and your coach.
                        <span className="underline"></span>
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="p-4 border-b border-black">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <div className="flex  items-center">
                          <div
                            className={clsx("transition ease duration-250", {
                              "  text-primary-500": open,
                              "  text-black hover:text-secondary-400 ": !open,
                            })}
                          >
                            Get Matched with a Coach
                          </div>
                        </div>
                        <span className="flex items-center ml-6 h-7">
                          <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={clsx(
                              "h-6 w-6 transform transition ease duration-500",
                              {
                                "-rotate-45 text-primary-500": open,
                                "rotate-0 text-black": !open,
                              }
                            )}
                          >
                            <path
                              d="M8.73518 11.432H0.96518V7.90405H8.73518V0.134047H12.2212V7.90405H20.0332V11.432H12.2212V19.202H8.73518V11.432Z"
                              className=" fill-current"
                            />
                          </svg>
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="py-6 mt-2  ">
                      <p className="text-base text-left ">
                        Answer a few more questions to help us match you with a
                        coach. The info you share will be reviewed by our Head
                        of Coaching, who makes the matches, and your coach.
                        <span className="underline"></span>
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        <div className="mr-auto text-left my-12 ">
          Still have questions?
          <br /> EMAIL: <br /> hello@mento.com
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default GetStarted;
