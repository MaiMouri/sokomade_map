import { Loader } from "@googlemaps/js-api-loader";
const API_Key = process.env.SECRET_KEY
const loadMap = () => {
  console.log('here');
  let map;
  const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
  const zoom = 14;
  const url = "https://maps.googleapis.com/maps/api/staticmap";
  const loader = new Loader({
    apiKey: API_Key,
    version: "weekly",
  });
  console.log(loader.apiKey);

  document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("wrapper");

    wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=YOUR_API_KEY)`;
    wrapper.addEventListener("click", () => {
      wrapper.remove();
      loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), {
          center,
          zoom,
        });
      });
    });
  });
}

export { loadMap };
