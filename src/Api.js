export const fetchData = async (apiType,) => {
  const res = await fetch(`https://staging.admin.haavoo.com/api/${apiType}`);
  const data = await res.json();
  return data;
};
