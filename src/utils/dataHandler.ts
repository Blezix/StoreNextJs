import fs from 'fs/promises';
import path from 'path';

const getFilePath = (filename: string) =>
    path.join(process.cwd(), 'src', 'data', filename);

export const readData = async <T = any>(filename: string): Promise<T> => {
    const filePath = getFilePath(filename);
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(filePath);
    return JSON.parse(data);
};

export const writeData = async <T = any>(filename: string, data: T) => {
    const filePath = getFilePath(filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};
