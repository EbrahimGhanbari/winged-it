import React from 'react';

import './Header.scss';

const Header = () => {

  return (
    <div className="header">
      <div className="wrapper">

        <div className="title">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="90px" viewBox="0 0 192.756 192.756"><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M0 0h192.756v192.756H0V0z" /><path d="M181.223 36.667c-.824.625-2.01.91-2.516 1.032l-.535.15.066-.019c-.447.165-1.428 1.035-2.512 2.111l-1.795-.067c-.207-.008-5.252-.137-18.426 4.69l-.764.298c-11.104 4.406-21.064 4.925-29.605 1.542-15.311-6.063-28.359-5.969-38.785.278C72.25 55.131 69.693 67.76 69.693 76.83c0 3.382.355 6.269.6 8.26l.23 1.958.355.432c1.191 1.377 2.564 3.04 3.162 3.858l-.005.032c-.236 1.227-.766 3.983-.766 9.088 0 .351.003.717.009 1.09-.138 1.175-.344 2.57-.482 3.17-2.096 1.983-2.605 4.162-2.605 5.767 0 1.336.339 2.271.371 2.355l-.028-.248c.392 1.794 3.013 4.912 5.014 6.79 3.08 2.89 8.51 6.785 16.891 8.932l2.97.76-.855-2.944a41.898 41.898 0 0 1-.873-3.663c3.289 1.562 8.907 3.405 15.206 1.916a1.84 1.84 0 0 0 1.418-1.796c0-.82-.492-1.86-1.197-2.91 3.104.212 6.572.072 10.162-.445 1.242-.18 2.158-1.436 2.18-2.986v-.055c0-1.096-.453-2.026-1.229-2.658a11.4 11.4 0 0 0 .221-1.47c2.395.184 7.201.37 14.727-1.522.633-.158 1.178-.583 1.531-1.196.359-.624.496-1.366.496-2.085a6.06 6.06 0 0 0-.229-1.641c-.174-.607-.938-1.363-1.723-2.016 5.213-.869 11.879-2.932 16.887-7.767.779-.751.979-1.496.979-2.062 0-.11-.008-.213-.02-.308-.123-.949-.734-1.58-1.459-2.083 5.172-1.797 14.602-5.711 15.328-10.563a3 3 0 0 0 .033-.45c0-.688-.236-1.57-1.129-2.447-.629-.618-1.562-1.161-2.533-1.595 2.871-1.46 6.611-3.961 10.775-8.403a2.949 2.949 0 0 0 .812-2.048c0-.434-.088-.886-.268-1.34-.301-.757-1.201-2.209-2.469-2.291a18.401 18.401 0 0 0-2.314-.003c6.469-4.723 11.119-10.642 13.887-17.703l.068-.173s.014-.112.025-.223c.164-.632.404-2.274.404-3.893 0-1.577-.229-3.117-.984-3.634l-1.041-.713-1.002.763z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /><path d="M161.268 33.904h.002c-11.961 5.057-13.826 5.714-22.619 6.007-8.85.294-15.854-1.384-23.268-3.16-4.137-.991-8.414-2.016-13.16-2.727-20.85-3.128-34.254 13.806-34.387 13.978-.779 1.004-1.441 1.994-.991 3.059a1.8 1.8 0 0 0 1.46 1.087c.756.095 8.432 1.732 13.092 2.742l.817.177 5.744-4.628 4.239-2.051 4.601-1.534 5.448-1.089 9.965 1.263 10.312 2.578 7.438 2.677 8.697.611 8.045-.759 8.514-2.584 3.539-1.962s-.207-.682-.396-1.312l2.705-1.179c3.047-1.289 4.887-2.067 7.662-4.001 2.303-1.604 2.941-4.653 3.215-5.956l.07-.321c-.109.403 1.42-2.91.555-2.835l-2.33.495c-5.467.475-7.477.794-8.969 1.424z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /><path d="M8.504 104.276c0 31.151 25.317 56.495 56.435 56.495s56.436-25.344 56.436-56.495c0-31.152-25.318-56.496-56.436-56.496S8.504 73.125 8.504 104.276z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /><path d="M10.254 104.276c0 30.186 24.532 54.745 54.685 54.745 30.153 0 54.686-24.56 54.686-54.745 0-30.187-24.533-54.746-54.686-54.746s-54.685 24.559-54.685 54.746z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" /><path d="M31.251 104.276c0 18.608 15.112 33.747 33.688 33.747 18.575 0 33.688-15.139 33.688-33.747 0-18.609-15.113-33.748-33.688-33.748-18.576 0-33.688 15.139-33.688 33.748z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" /><path d="M32.126 104.276c0 18.125 14.72 32.873 32.812 32.873s32.813-14.748 32.813-32.873c0-18.126-14.72-32.874-32.813-32.874S32.126 86.15 32.126 104.276z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /><path d="M56.371 104.276c0 4.756 3.844 8.625 8.568 8.625s8.567-3.869 8.567-8.625-3.843-8.626-8.567-8.626-8.568 3.871-8.568 8.626z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" /><path d="M53.528 104.276c0 6.323 5.119 11.469 11.411 11.469S76.35 110.6 76.35 104.276s-5.119-11.469-11.411-11.469-11.411 5.145-11.411 11.469z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" /><path d="M58.777 104.276c0-3.436 2.758-6.22 6.162-6.22 3.403 0 6.162 2.784 6.162 6.22 0 3.435-2.759 6.219-6.162 6.219s-6.162-2.784-6.162-6.219z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /><path d="M35.811 104.276c0 2.814.4 5.537 1.145 8.113l11.06.201a18.824 18.824 0 0 1-1.924-8.314v-.002c0-1.162.105-2.301.306-3.405l-10.515 1.353a29.059 29.059 0 0 0-.071 2.053v.001h-.001zm37.359 27.999l.133-11.062a18.67 18.67 0 0 1-8.363 1.968h-.003c-1.12 0-2.217-.099-3.284-.288l1.056 10.483c.735.056 1.479.085 2.228.085h.003c2.857.001 5.62-.414 8.23-1.186zm.152-12.549l.018-1.494-4.595-3.352-7.135 6.671c1.078.208 2.19.318 3.328.318h.003c3.033 0 5.889-.777 8.381-2.143zm.031-2.569l.103-8.572.875.01-.111 9.195 1.001.73a17.505 17.505 0 0 0 2.111-1.809 17.565 17.565 0 0 0 5.142-12.434v-.003c0-2.719-.618-5.295-1.72-7.596l-8.877.536-.409.024-.051-.409-.926-7.506-5.04 4.992-.615-.619 5.52-5.467-.088-.718a17.419 17.419 0 0 0-5.327-.831h-.003c-2.41 0-4.708.491-6.799 1.377l-.042 1.244 6.427 4.642-.509.708-5.954-4.3-.207 6.149-.875-.027.228-6.737-.994-.717a17.656 17.656 0 0 0-7.806 9.387l1.207 1.172 5.853-.753.109.865-5.163.664 3.955 3.84-.608.626-4.452-4.324-1.538.197a17.685 17.685 0 0 0-.365 3.582v.002c0 3.018.76 5.858 2.099 8.342l1.28.023 3.958-5.05.687.537-3.553 4.532 8.611.156-.014.875-9.274-.168-.637.813c.592.85 1.257 1.645 1.986 2.375a17.496 17.496 0 0 0 8.031 4.604l.037-.035-.716-7.109.868-.085.649 6.445 6.609-6.179-.222-.162.517-.707.356.26.398-.372.598.64-.276.258 3.956 2.887zm.854 1.707l-.004.345c.085-.054.17-.107.254-.162l-.25-.183zm-.023 1.88L74.048 132a29.106 29.106 0 0 0 10.152-5.846l-8.617-6.286a18.2 18.2 0 0 1-1.399.876zm2.144-1.416l8.533 6.224c.225-.211.447-.426.666-.645 5.274-5.284 8.541-12.581 8.541-20.629v-.003c0-2.893-.422-5.688-1.208-8.327l-10.701.646a18.828 18.828 0 0 1 1.628 7.681v.003c0 5.209-2.114 9.934-5.526 13.357a18.966 18.966 0 0 1-1.933 1.693zm-25.076 10.708l8.205-7.671a18.861 18.861 0 0 1-7.838-4.729 18.838 18.838 0 0 1-1.9-2.224l-6.5 8.293a29.257 29.257 0 0 0 8.033 6.331zm9.194-7.398l-8.368 7.824a28.9 28.9 0 0 0 9.746 2.834l-1.066-10.584-.312-.074zm-17.81.395l6.562-8.371a19.055 19.055 0 0 1-.721-1.188l-11.252-.204a29.193 29.193 0 0 0 5.411 9.763zm7.418-9.464l.052-.065-.093-.001.041.066zm21.842-26.862l7.713-7.639a28.882 28.882 0 0 0-9.945-3.593l1.345 10.902c.299.103.595.213.887.33zm8.482-7.173l-7.617 7.544a18.918 18.918 0 0 1 5.5 3.838 19.02 19.02 0 0 1 3.492 4.825l10.835-.654a29.32 29.32 0 0 0-12.21-15.553zm-8.618 8.534l-.483.479.958 7.769 8.083-.488a17.716 17.716 0 0 0-2.985-3.989 17.583 17.583 0 0 0-5.573-3.771zM46.585 99.966c.131-.562.289-1.115.469-1.657l-7.875-7.649a29.018 29.018 0 0 0-3.221 10.673l10.627-1.367zm1.396-.179l.525-.067-.398-.388c-.044.15-.087.302-.127.455zm-.602-2.379a18.984 18.984 0 0 1 7.679-9.224l-8.756-6.324a29.403 29.403 0 0 0-6.689 8.006l7.766 7.542zm21.388-22.066a29.097 29.097 0 0 0-3.826-.251h-.003c-2.192 0-4.33.245-6.385.707l-.366 10.829a18.7 18.7 0 0 1 6.751-1.255h.003c1.785 0 3.514.251 5.151.719l-1.325-10.749zm-11.098.668a29.033 29.033 0 0 0-10.667 5.281l8.877 6.411c.461-.255.935-.491 1.419-.707l.371-10.985zm-.427 12.676l.007-.22-.185.092.178.128zm-23.618 15.59v-.002c.001-8.646 3.512-16.487 9.182-22.168 5.673-5.684 13.502-9.203 22.133-9.204h.003c8.63 0 16.459 3.52 22.131 9.203 5.67 5.681 9.182 13.523 9.182 22.169v.003c0 8.646-3.512 16.486-9.182 22.167-5.672 5.684-13.501 9.203-22.132 9.204h-.003c-8.63-.001-16.459-3.521-22.131-9.203-5.671-5.68-9.183-13.522-9.183-22.169z" fill="#fff" /><path d="M104.379 120.404c-6.246 15.689-21.572 26.806-39.44 26.806-23.4 0-42.437-19.064-42.437-42.496 0-2.93.297-5.791.863-8.555 0 0 .189.258.271.392.346.569 1.126 1.676 1.444 1.649.656-.055.711-.984.984-1.094 1.922-.769 3.185 2 3.445 2.297.766.874 1.822-.765 1.822-.765.247-.346.655-.901.655-.901-.449 2.195-.736 4.65-.736 6.977 0 18.608 15.112 33.747 33.688 33.747 13.755 0 25.61-8.301 30.837-20.164l8.604 2.107zM75.183 60.992c-.169.309 3.124-5.262 5.205-7.203l.204-.184-.22-.084a52.698 52.698 0 0 0-15.724-2.387c-23.868 0-44.096 15.896-50.679 37.668 0 0-.07.373.176.394.583.05.583-.292.765-.656.183-.365 1.161-2.18 1.787-2.114 1.385.146.777 1.112 1.458 1.13 1.385.036 2.078-1.823 2.442-2.151.364-.328 1.24-.802 1.276 0 .036.802-.365 2.588-.11 3.135.255.547 1.021.875 1.021.875.337.205.438-.047.438-.047 6.074-17.038 22.351-29.266 41.426-29.266 3.635 0 6.993.397 10.374 1.234l.161-.344z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /><path d="M156.863 58.72h-.438 2.188-1.75zM182.279 38.062c-1.357 1.028-3.178 1.316-3.434 1.411-.316.117-4.205 3.899-5.883 6.111l.904-3.959s-4.758-.18-17.758 4.584c-2.393.877-17.025 7.603-31.617 1.825-20.812-8.242-32.25-2.838-37.241.152-19.773 11.847-15.655 32.223-15.047 38.151 0 0 3.117 3.603 3.647 4.562.164.295-.943 2.94-.82 10.75 0 0-.439 3.802-.738 4.059-3.444 2.951-2.091 6.518-2.091 6.518-.059.432 5.289 10.455 20.673 14.395 0 0-1.486-5.108-1.216-7.297 0 0 7.725 5.51 16.824 3.357.457-.107-1.105-3.137-3.936-5.412-.125-.102 4.982 1.6 14.473.23.752-.108 1.355-2.651-.912-3.041 0 0 .77-1.617.609-4.104-.043-.653 4.771 1.319 16.025-1.51.668-.168.885-1.541.543-2.746-.113-.39-2.449-2.174-2.889-2.433-.998-.586-3.051-.355-4.418-.355-1.369 0-.902-.859-.902-.859s14.924.736 23.84-7.873c1.221-1.179-.309-1.784-1.783-2.645-.322-.188-1.385.181-2.297-.123s-.303-.76 1.064-1.064c1.367-.304 16.588-5.242 17.328-10.184.324-2.158-5.139-3.564-5.457-3.511-.738.123-1.27.159-2.029.615s-.57-.296-.57-.752 6.842-.785 15.658-10.184c.977-1.044-.451-2.716-.762-2.736-4.441-.289-5.928 1.063-5.928 1.063-3.725.187-2.742 1.293-3.039 1.064-.23-.177-3.576-.167-3.576 1.397 0 .246-2.645-1.23-3.936 1.106-.217.392-1.383.362-1.23-.246s20.221-5.23 27.768-24.478c.004-.015-.008-.073.02-.156.69-2.194.133-5.682.133-5.682z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" /><path d="M81.767 53.179l5.25-4.228 4.52-2.188 4.812-1.604 5.833-1.167 10.354 1.312 10.498 2.625 7.291 2.625 8.312.583 7.729-.729 8.164-2.479 3.377-1.872c-3.094.249-2.342-.472-2.342-.472 6.428-2.918 8.381-3.29 12.162-5.924 2.26-1.574 2.479-5.422 2.66-5.438-5.25.456-7.16.753-8.438 1.293-12.014 5.08-14.129 5.84-23.24 6.144-14.107.469-23.623-3.937-36.746-5.906-20.394-3.059-34.449 14.545-33.465 14.655.984.109 13.269 2.77 13.269 2.77z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" /><path d="M182.279 38.062c-1.357 1.028-3.178 1.316-3.434 1.411-.316.117-4.205 3.899-5.883 6.111l.904-3.959s-4.758-.18-17.758 4.584c-2.393.877-17.025 7.603-31.617 1.825-20.812-8.242-32.25-2.838-37.241.152-19.773 11.847-15.655 32.223-15.047 38.151 0 0 3.117 3.603 3.647 4.562.164.295-.943 2.94-.82 10.75 0 0-.439 3.802-.738 4.059-3.444 2.951-2.091 6.518-2.091 6.518-.059.432 5.289 10.455 20.673 14.395 0 0-1.486-5.108-1.216-7.297 0 0 7.725 5.51 16.824 3.357.457-.107-1.105-3.137-3.936-5.412-.125-.102 4.982 1.6 14.473.23.752-.108 1.355-2.651-.912-3.041 0 0 .77-1.617.609-4.104-.043-.653 4.771 1.319 16.025-1.51.668-.168.885-1.541.543-2.746-.113-.39-2.449-2.174-2.889-2.433-.998-.586-3.051-.355-4.418-.355-1.369 0-.902-.859-.902-.859s14.924.736 23.84-7.873c1.221-1.179-.309-1.784-1.783-2.645-.322-.188-1.385.181-2.297-.123s-.303-.76 1.064-1.064c1.367-.304 16.588-5.242 17.328-10.184.324-2.158-5.139-3.564-5.457-3.511-.738.123-1.27.159-2.029.615s-.57-.296-.57-.752 6.842-.785 15.658-10.184c.977-1.044-.451-2.716-.762-2.736-4.441-.289-5.928 1.063-5.928 1.063-3.725.187-2.742 1.293-3.039 1.064-.23-.177-3.576-.167-3.576 1.397 0 .246-2.645-1.23-3.936 1.106-.217.392-1.383.362-1.23-.246s20.221-5.23 27.768-24.478c.004-.015-.008-.073.02-.156.69-2.194.133-5.682.133-5.682z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" /><path d="M81.767 53.179l5.25-4.228 4.52-2.188 4.812-1.604 5.833-1.167 10.354 1.312 10.498 2.625 7.291 2.625 8.312.583 7.729-.729 8.164-2.479 3.377-1.872c-3.094.249-2.342-.472-2.342-.472 6.428-2.918 8.381-3.29 12.162-5.924 2.26-1.574 2.479-5.422 2.66-5.438-5.25.456-7.16.753-8.438 1.293-12.014 5.08-14.129 5.84-23.24 6.144-14.107.469-23.623-3.937-36.746-5.906-20.394-3.059-34.449 14.545-33.465 14.655.984.109 13.269 2.77 13.269 2.77z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" /><path d="M82.278 77.093c1.75-.218 5.213.511 8.53-.218 4.602-1.012 9.405-3.281 9.405-3.281s1.684-.254.656-1.312c-2.984-3.074-10.499-5.031-10.499-5.031-1.736-.182-2.296.705-2.625 1.531-.408 1.026-1.531.219-1.968.875-.437.656-.905 2.852-1.755 3.539-2.456 1.987-1.744 3.897-1.744 3.897zM89.572 63.826c1.081 0 8.811.464 16.721-3.604 1.092-.562 1.146-1.582 1.01-1.874-.719-1.528-4.238-2.379-5.189-2.522-1.582-.238-1.014 1.137-1.586 1.081-2.121-.207-5.19.432-5.19.432-1.312-.089-1.179 1.935-1.369 1.875-1.735-.555-2.407-.071-2.451.288-.16 1.306.36 2.018-.504 2.018s-1.611-.838-1.828-.045c-.216.792-1.271 1.127-1.271 1.127 0 1.657 1.442 1.225 1.442 1.225h.215v-.001zM113.191 57.772c-.875-.656-3.062-1.021-3.5-.219-.438.802-.492 1.267.365 1.677 13.561 6.489 23.037-1.822 23.621-2.406s1.604-.949.584-1.24c-1.021-.292-1.24-.146-2.625.511-1.385.656-2.041-.365-2.625.438-.582.802-.947 1.823-1.822 1.75-1.172-.098-.729-.802-1.457-1.167-.73-.365-.365-.146-1.605.438-1.238.583-.439.083-1.457-.219-1.969-.583-2.115 1.531-2.99 1.531-1.605 0-1.24-1.312-2.406-1.458s-1.678-.438-2.479.583c-.627.799-1.604-.219-1.604-.219zM104.734 70.75c7.945 2.333 23.768 0 27.049-1.677.832-.425 1.822-.657.873-1.458-.947-.802-7.873-4.594-19.756-4.885-1.32-.033-1.094.729-1.969 1.021s-1.387-.583-1.822.219c-.438.802-.098 2.698-1.459 2.698-1.312 0-.717-.978-1.459-1.021-1.238-.073-.584.943-1.604 1.239-2.262.656-1.896-.51-2.771-.292s-2.057.626-1.531.802c2.188.729 4.449 3.354 4.449 3.354zM135.537 70.203c37.621-2.953 44.566-25.208 45.385-27.915 0 0-1.092.574-1.283.875-1.23 1.934-2.984 5.191-5.715 6.48-1.969.929-2.844 1.914-2.844 2.187 0 .813-2.986 1.874-3.719 2.188-.383.164-.656 1.75-.656 1.75-1.695.492-3.172.109-3.281.656-.107.546.166.984-.436.984-1.209 0-2.188-.547-2.516.328s-.602.972-1.531.93c-3.555-.164-2.4.194-3.391.382-1.148.219-1.148 1.969-2.898 1.422-1.75-.546-2.365-.593-3.008-.218-1.312.765-2.297 1.531-2.516 1.531-2.197 0-3.447-.248-4.264.219-.766.438-1.312 1.422-1.312 1.422-1.422.109-2.312-.209-2.297.109.164 3.281-7.682 2.48-7.219 2.843 2.025 1.585 3.501 3.827 3.501 3.827zM129.449 76.51s-1.186.383-.438.729c2.844 1.312 4.594 3.427 4.812 3.354 1.312-.438 23.258.364 37.328-14.582.301-.319-1.75-.583-3.207-.292-1.459.292-.875 1.166-1.75 1.166s-1.75-.219-1.896-.073c-.523.526.121.948-.801.948-.803 0-2.479-.146-2.625.292-.145.438-.121 2.042-1.094 2.042-.438 0-.729-1.239-2.479-1.021-.844.105-1.332 1.79-1.604 1.896-1.312.511-2.553-2.114-4.74-.729-.443.281.678 2.174-.875 1.677-1.822-.584-1.854.394-3.135.146-2.26-.438-3.207 1.239-3.207 1.239-3.281-1.969-2.77 1.452-3.354 1.312-5.469-1.312-7.074 2.041-7.438 1.896-.954-.383-3.497 0-3.497 0zM124.273 92.477c3.062 0 27.777.073 39.078-11.52.42-.431.531-.55-.072-.947-3.863-2.552-5.031-.803-5.031-.803-2.406-.947-3.354.729-3.354.729-1.604-.219-3.428-.51-3.719.073-.291.583-.51 1.822-.875 1.822-.957 0-4.447-.146-6.123.073 0 0-.219 1.75-.584 1.823-1.355.271-5.322-1.75-5.906-1.021-.582.729.438 1.896-.51 1.896s-6.854-1.458-8.166-.292-3.498 2.551-4.301 2.625c-1.828.167-2.479-.437-3.428.073-.947.51-1.514 1.797-1.238 1.896 5.47 1.969 4.229 3.573 4.229 3.573zM110.275 99.476c11.154-2.916 10.207-4.958 10.645-5.104 1.443-.48 4.885-.583 5.395-.364 3.049 1.306 7.291 1.75 7.291 1.75s.219-1.24 1.457-1.167c.584.034 4.229.656 4.74.438.51-.219 1.24-1.239 1.24-1.239 1.238-.073 2.623.364 3.791-.219.664-.333.379-1.051.801-.729 1.531 1.167 3.5.729 3.5.729-11.01 12.03-38.86 5.905-38.86 5.905zM103.201 105.163c11.521 6.27 31.498 2.479 30.842 2.041s-2.334-2.406-2.334-2.406c-5.395 1.24-5.248-1.677-6.852-.802-1.59.867-1.318-1.094-3.209-.292-2.406 1.021-1.604-1.749-3.791-.802-4.459 1.932-3.41-1.586-4.156-1.677-2.406-.292-2.041 1.021-2.406.656-.363-.365-.912-1.221-1.238-.656-1.896 3.281-3.666 1.354-3.719 2.114-.146 2.042-3.209 1.677-3.209 1.677l.072.147zM90.297 108.954c9.55 8.53 27.814 7.613 27.56 7.437-2.188-1.531-2.352-3.54-2.771-3.791-1.094-.656-1.385 1.021-1.967.51-.584-.51-.875-1.896-2.188-1.312-1.312.584-2.145.436-2.479.292-1.531-.656-2.855-2.875-4.156-2.697-4.422.6-3.891-2.174-4.594-2.041-2.334.438-3.646.072-4.011.364-.9.719-1.458 1.021-2.333.875-.875-.146-2.042-.365-2.26-.22-.217.146-.801.583-.801.583z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /><path d="M106.119 121.786c-18.154-2.406-28.07-15.311-28.07-15.821s-.073-1.677.51-1.167c.583.511 4.302 2.625 5.396 2.771 1.094.146 1.896-.729 2.187-.583 1.141.57 5.76 6.635 6.343 6.999.583.365 1.968-.875 2.114-.583.471.94.729 2.188 1.385 2.406s1.897-.656 1.897-.656c1.385.219 2.551 3.208 3.354 3.354.801.146 1.092-.066 2.113.292l-.146.51 1.459.073c.511.436 1.458 2.405 1.458 2.405zM75.06 107.204c-1.968 1.312-1.834 4.062-1.167 5.104 5.614 8.749 17.425 13.124 17.061 12.03s-.729-2.917-1.167-3.281c-.751-.626-1.458-2.02-2.698-1.896-2.188.219-2.355-3.229-2.843-3.062-2.771.948-1.81-3.165-3.135-3.28-3.354-.292-1.604-2.479-2.771-2.844-1.166-.364-.947-.511-1.385-1.823-.437-1.312-1.895-.948-1.895-.948zM75.57 103.413c-.073.656-1.021 2.332-.073 2.624s1.531.219 1.531-.875c0-1.093-1.458-1.749-1.458-1.749zM76.81 101.735c-.073.511-.583 1.312.073 1.312s.948.146.948-.51c0-.655-1.021-.802-1.021-.802zM79.653 101.226c-1.385 1.094-.364 2.479-.364 2.479 13.853 6.489 27.633-1.094 27.487-1.75-.146-.655.291-1.094-.803-1.166s-6.051-2.916-7.072-2.697c-1.02.219-.865.946-2.552.729-2.26-.291-1.531.656-2.552 1.312-1.021.656-3.155-.91-4.447 1.458-.875 1.604-1.644-.396-2.697.073-2.625 1.166-1.446-1.237-2.843-.438-2.042 1.166-1.386-.146-2.406-.219-1.022-.073-1.751.219-1.751.219zM77.684 90.508c-.218.948-2.331 9.753-1.604 9.842 5.322.656 12.832-3.572 13.196-3.718.364-.146 1.09-1.022.438-1.24-2.843-.947-7.708-5.226-8.749-5.613-3.134-1.167-3.281.729-3.281.729zM78.414 88.394c1.896.511 10.808-.04 12.978-.583.292-.073 3.354-.146 6.125-2.187.605-.445 1.312-1.677 0-2.406-2.486-1.381-9.333-4.083-10.863-3.937-1.531.146-4.984-.382-5.76.364-1.896 1.823-.168 3.959-.948 4.739-3.21 3.208-1.532 4.01-1.532 4.01zM94.308 94.664c3.792 3.281 13.489.583 14.364.146.873-.438 1.312-.146 2.916-.146s1.748-.073 1.969-.146c.939-.314 1.967-3.426 5.248-3.135.828.073.875-1.167.51-1.896-1.049-2.1-16.049-3.64-16.988-3.5-1.457.218-1.047 2.284-2.113 2.042-3.207-.729-.264 2.452-2.041 2.042-2.844-.656-1.166 1.749-2.552.875s-3.062-1.458-3.208-.802c-.146.656-.729.948.292 1.677 1.019.728 1.603 2.843 1.603 2.843zM97.662 78.114c2.697 8.603 22.018 4.739 22.82 3.792.801-.948.801-1.021 2.479-1.75s3.719-.802 3.791-1.896c.074-1.093.439-1.922-.51-1.896-7.729.219-3.354-1.896-7.875-1.896-3.5 0-6.961-.503-8.748.292-3.938 1.75-6.344-.437-7.438.948-1.094 1.385-1.168 2.114-1.168 2.114-.581-.146.053-.214-3.351.292z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /><path d="M76.25 88.558s-.691 1.658-2.764-2.764c-1.004-2.142-4.422-23.632 12.438-34.688 2.058-1.349 12.544-10.283 33.443-3.317 3.318 1.105 21.883 9.482 42.668.398 1.9-.831 8.869-4.428 8.33-3.439-3.066 5.631-5.383 5.547-6.086 5.95-18.764 10.755-44.131.865-47.123-.146-21.282-7.187-35.371 7.238-37.174 9.674-7.878 10.642-3.732 28.332-3.732 28.332z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /><path d="M166.195 37.066c-.947 2.479-5.635 4.668-7.947 5.104-5.031.948-8.916 3.367-14.217 3.864-16.332 1.531-32.861-4.162-34.631-4.593-23.04-5.614-33.685 9.332-34.195 9.259-1.102-.157-1.677-.583-4.521-.802 0 0 5.031-7.583 15.53-11.009 1.581-.516 6.708-3.792 23.986 0 1.557.341 8.166 3.062 20.852 4.01 1.457.109 9.553 1.167 17.279-.292 1.797-.339 10.617-4.145 11.812-4.666 2.845-1.239 6.052-.875 6.052-.875z" fill-rule="evenodd" clip-rule="evenodd" fill="#c63538" /></svg>

          </a>
          <div className="title">
            <h1>Winged It</h1>
          </div>
        </div>

        <div className="auth">
          <a className="link mr" href="/signin">Sign in</a>
          <button>
            <a className="link" href="/signup">Sign up</a>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Header;
