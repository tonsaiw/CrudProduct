import { useState } from "react";
import axios from "axios";

function MainLayout() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, desc);
  };

  const api = axios.create({
    baseURL: "http://localhost:3000/graphql",
  });

  const getCategory = async () => {
    try {
      console.log("call getCategory");
      const response = await api.post("", {
        query: `
            query {
                getCategories {
                    id
                    name
                    desc
                }
            }
            `,
      });
      console.log("response : ", response.data.data.getCategories);
    } catch (error) {
      console.error("error : ", error);
    }
  };

  getCategory();

  return (
    <div>
      <div>List of items</div>
      <div>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="col-span-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="about"
                  name="about"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MainLayout;
