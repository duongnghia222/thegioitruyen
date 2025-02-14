import useSWR from 'swr';
import { Novel } from '../types/novel';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useNovel(id?: string) {
  const { data, error, mutate } = useSWR<Novel>(
    id ? `/api/novels/${id}` : null,
    fetcher
  );

  return {
    novel: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useNovels(limit = 10) {
  const { data, error, mutate } = useSWR<Novel[]>(
    `/api/novels?limit=${limit}`,
    fetcher
  );

  return {
    novels: data || [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export async function createNovel(novelData: Partial<Novel>) {
  const response = await fetch('/api/novels', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novelData),
  });

  if (!response.ok) {
    throw new Error('Failed to create novel');
  }

  return response.json();
}

export async function updateNovel(id: string, novelData: Partial<Novel>) {
  const response = await fetch(`/api/novels/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novelData),
  });

  if (!response.ok) {
    throw new Error('Failed to update novel');
  }

  return response.json();
} 