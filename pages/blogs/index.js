import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

export async function getStaticProps(context) {
  const res = await fetch(
    `https://bloghubbackend.herokuapp.com/api/blog-posts?populate=*`
  );
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Blogs({ data }) {
  console.log(data);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((blog, index) => {
              const { Heading, SubHeading, blog_catagory, slug, createdAt } =
                blog.attributes;
              const blogcatagory =
                blog_catagory?.data?.attributes?.CatagoryName;
              const catagorySlug =
                blog_catagory?.data?.attributes?.catagoryslug;
              return (
                <div className="p-4 lg:w-1/3" key={index}>
                  <div
                    className={`h-full bg-gray-300 bg-cover bg-opacity-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative`}
                  >
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                      <Link href={`/blogs/catagory/${catagorySlug}`}>
                        <a>{blogcatagory}</a>
                      </Link>
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      {Heading}
                    </h1>
                    <p className="leading-relaxed mb-3">{SubHeading}</p>
                    <Link href={`/blogs/${slug}`}>
                      <a className="text-indigo-500 inline-flex items-center">
                        Read More
                      </a>
                    </Link>
                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span className="text-gray-700 gap-2 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <div className="border border-gray-700 p-1 flex justify-center items-center bg-slate-400 rounded-full">
                          <AiOutlineUser />
                        </div>
                        Krishnendu Das
                      </span>

                      <span className="text-gray-700 gap-1 inline-flex items-center leading-none text-sm">
                        <div>
                          <MdDateRange size={20} />
                        </div>
                        {createdAt}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
