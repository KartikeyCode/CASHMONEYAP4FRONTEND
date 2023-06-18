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

    const humanReadableTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return humanReadableTime;
  }

  return (
    <div className="bg-[#e7e8e2] min-h-screen overflow-x-hidden">
      <Navbar></Navbar>
      <p>test: {search}</p>
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

        <article class="xl:w-96 w-80  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            class="h-56 w-full object-cover"
          />

          <div class="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            <a href="/item">
              <h3 class="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>

        <article class="xl:w-96 w-80  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            class="h-56 w-full object-cover"
          />

          <div class="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            <a href="/item">
              <h3 class="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>

        <article class="xl:w-96 w-80  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            class="h-56 w-full object-cover"
          />

          <div class="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            <a href="/item">
              <h3 class="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
        <article class="xl:w-96 w-80  overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Office"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            class="h-56 w-full object-cover"
          />

          <div class="bg-white p-4 sm:p-6">
            <time datetime="2022-10-10" class="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            <a href="/item">
              <h3 class="mt-0.5 text-lg text-gray-900">
                How to position your furniture for positivity
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
