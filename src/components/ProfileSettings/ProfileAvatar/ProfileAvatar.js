// export const AvatarMain = () => {
//     museEffect(() => {
//     // При загрузке страницы проверяем, есть ли сохраненное изображение
//     const storedImage = localStorage.getItem('avatarImage');
//     if (storedImage) {
//       setFieldValue('file', new File([storedImage], 'avatar.jpg', { type: 'image/jpeg' }));
//     }
//   }, []);

//   const handleImageChange = (event) => {
//     const selectedImage = event.currentTarget.files[0];

//     // Сохраняем выбранное изображение в локальное хранилище
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       localStorage.setItem('avatarImage', e.target.result);
//     };
//     reader.readAsDataURL(selectedImage);

//     setFieldValue('file', selectedImage);
//   };

// }
