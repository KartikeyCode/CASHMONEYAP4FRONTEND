import searchItems from "@/app/lib/SearchItems";
import Navbar from "../../components/navbar";

export default async function Itemlist({ params: { search } }) {
  const formdata = { search: search };
  const resp = await searchItems(formdata);
  console.log(resp.data.results);
  const results = resp.data.results;

  function convertToHumanReadableTime(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    const humanReadableTime = `${year}-${month}-${day}`;
    return humanReadableTime;
  }

  return (
    <div className="bg-[#e7e8e2] min-h-screen overflow-x-hidden">
      <Navbar></Navbar>
      <div className="xl:py-8 py-4 flex mt-4 xl:mt-8 justify-center gap-10 flex-auto flex-wrap ">
        {results.map((result) => (
          <>
            <article class="xl:w-96 w-80  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt="Item"
                src={`http://127.0.0.1:8000${result.image}`}
                class="h-56 w-full object-cover"
              />

              <div class="bg-white p-4 sm:p-6">
                <time datetime="2022-10-10" class="block text-xs text-gray-500">
                  {convertToHumanReadableTime(result.created_at)}
                  {/* format this to readable time */}
                </time>

                <a href={`/item/${result.item_uuid}`}>
                  <h3 class="mt-0.5 text-lg text-gray-900">{result.name}</h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {result.description}
                </p>
              </div>
            </article>
          </>
        ))}
      </div>
    </div>
  );
}
