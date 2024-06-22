/* eslint-disable @typescript-eslint/no-explicit-any */
const NotAvailable = ({ text }: any) => {
  return (
    <div className="  text-center   my-20">
      <h1 className=" text-green-400 text-2xl font-semibold">
        {" "}
        {text} data not available !!!
      </h1>
    </div>
  );
};

export default NotAvailable;
