import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    images: {
        domains: ['cdn.pixabay.com'],  // Добавьте сюда домены, с которых разрешена загрузка изображений
    },
}
export default nextConfig;
