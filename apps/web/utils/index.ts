import { client } from "../libs/client";

export const getBlogList = async () => {
  const blogList = await client.getAllContents({ endpoint: "blog2" });
  return blogList;
};
