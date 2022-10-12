


const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const loadOptions = async (search, prevOptions , subCategory) => {
  await sleep(500);

  let filteredOptions;
  if (!search) {
    filteredOptions = subCategory;
  } else {
    const searchLower = search.toLowerCase();

    filteredOptions = subCategory.filter(({ subCategoryName }) =>
      subCategoryName.toLowerCase().includes(searchLower)
    );
  }

  const hasMore = filteredOptions.length > prevOptions.length + 10;
  const slicedOptions = filteredOptions.slice(
    prevOptions.length,
    prevOptions.length + 10
  );

  return {
    options: slicedOptions,
    hasMore,
  };
};

export default loadOptions;
