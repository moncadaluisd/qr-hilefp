"use client";
import Counter from "./Counter";

export default function POSItem() {
  return (
    <div className="flex my-4">
      <div className="mr-4 flex-shrink-0">
        <img
          alt=""
          src={
            "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
          }
          className="pointer-events-none object-cover w-12 group-hover:opacity-75"
        />
      </div>
      <div>
        <h4 className="text-md leading-6">Lorem ipsum</h4>
        <div className="flex flex-col justify-between w-full">
          <div className="">
            <h4 className="text-sm leading-6 ml-1">$ 10.12</h4>
          </div>
          <div>
            <Counter
              initialValue={1}
              onValueChange={(value) => console.log(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

