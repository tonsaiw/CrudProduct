import { useState } from "react";
import axios from "axios";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function MainLayout() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [snackbarMessage, setSnackbarMessage] = useState("");
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
      console.log("response : ", response);
    } catch (error) {
      console.error("error : ", error);
    }
  };

  const createCategory = async (name: string, desc: string) => {
    try {
      console.log("call createCategory");
      const response = await api.post("", {
        query: `
                mutation {
                    createCategory(createCategoryInput: {
                        name:"${name}",
                        desc:"${desc}"
                    }) {
                        id
                        name
                        desc
                    }
                }

            `,
      });
      console.log("responseCreated : ", response);
      if (response.data.data !== null) {
        setSnackbarSeverity("success");
        setSnackbarMessage("Create Category Success");
      } else {
        setSnackbarSeverity("error");
        setSnackbarMessage("Failed to Create Category");
      }
    } catch (error) {
      console.error("error : ", error);
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to Create Category");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCategory(name, desc);
    setName("");
    setDesc("");
    setOpen(true);
  };

  const handleClose = (
    _: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  getCategory();

  return (
    <div>
      <div>List of items</div>
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
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="desc"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="desc"
                  name="desc"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <button type="submit">Submit</button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity={snackbarSeverity}
                variant="filled"
                sx={{ width: "100%" }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MainLayout;
