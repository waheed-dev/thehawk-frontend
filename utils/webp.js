const webp = (image) => {
    const webpImage = image?.replace(".jpg", ".webp");
    return webpImage;
}

export default webp