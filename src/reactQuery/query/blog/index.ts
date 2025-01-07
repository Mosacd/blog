import { Blog, getFilteredBlogsList } from "../../../supabase/blogsList";
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { BLOG_QUERY_KEYS } from "./enum";





export const useGetBlogsList = ({
    queryOptions
  }: {
    queryOptions?: Omit<UseQueryOptions<Blog[], Error, Blog[]>, "queryKey">;
  } = {},debouncedSearchText: string): UseQueryResult<Blog[], Error> => {
    return useQuery<Blog[], Error,Blog[]>({
        queryKey: [BLOG_QUERY_KEYS.LIST, debouncedSearchText],
        queryFn:() => getFilteredBlogsList({ searchText: debouncedSearchText }),
      ...queryOptions,
    });
  };
