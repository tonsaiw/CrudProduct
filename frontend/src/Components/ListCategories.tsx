import { useState, useEffect } from "react";
import { api } from "../api/axios";
import { Category } from "../types/CategoryType";
import { useSnackbar } from "../hooks/useSnackbar";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const ListCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const {
    snackbarOpen,
    snackbarSeverity,
    snackbarMessage,
    showSnackbar,
    closeSnackbar,
  } = useSnackbar();

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, [categories]);

  const getCategories = async () => {
    try {
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
      setCategories(response.data.data.getCategories);
    } catch (error) {
      console.error("error : ", error);
    }
  };

  const deleteCategory = async (id: number) => {
    try {
      const response = await api.post("", {
        query: `
          mutation {
            deleteCategory(id: ${id}) {
              id
              name
              desc
            }
          }
        `,
      });
      if (response.data.data !== null) {
        showSnackbar("Delete Category Success", "success");
        getCategories();
      } else {
        showSnackbar("Failed to Delete Category", "error");
      }
    } catch (error) {
      console.error("error : ", error);
      showSnackbar("Failed to Delete Category", "error");
    }
  };

  const handleDeleteCategory = async (id: number) => {
    deleteCategory(id);
  };

  return (
    <div>
      <div>List of Categories</div>
      {categories.map((category) => (
        <div key={category.id} className="bg-red-500 p-20 m-20">
          <div>Name : {category.name}</div>
          <div>Desc : {category.desc}</div>
          <button onClick={() => handleDeleteCategory(category.id)}>
            Delete
          </button>
        </div>
      ))}
      {snackbarOpen && (
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={closeSnackbar}
          message={snackbarMessage}
        >
          <Alert onClose={closeSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default ListCategories;
