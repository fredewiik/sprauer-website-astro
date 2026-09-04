const API_URL = import.meta.env.PUBLIC_WORDPRESS_API_URL || 'https://sprauer.fr/wp-json/wp/v2';

export async function fetchAPI(endpoint: string) {
  const res = await fetch(`${API_URL}/${endpoint}`);
  if (!res.ok) throw new Error(`Erreur API WP: ${res.statusText}`);
  return await res.json();
}

export async function getAllPosts() {
  return await fetchAPI('posts?_embed&per_page=100');
}

export async function getAllPages() {
  return await fetchAPI('pages?_embed&per_page=100');
}