import { request } from "../lib";

export type SongChordsType = {
  id: string;
  name: string;
  color: string;
};

export type Song = {
  id: string;
  name: string;
  lyrics: string;
  author: string;
  chords: SongChordsType[];
};

export const getSongById = (id: number): Promise<Song> =>
  request({
    url: "/songs/" + id,
    method: "get",
  });

export type Author = {
  id: string;
  name: string;
  songs: Song[];
};

export const getAuthorsList = (): Promise<Author[]> =>
  request({
    url: "/authors",
    method: "get",
  });
