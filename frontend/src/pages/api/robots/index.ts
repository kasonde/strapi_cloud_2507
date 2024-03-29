import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const basepath = 'https://' + req.headers.host;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    if (process.env.BASE_PATH !== basepath) {
        res.end('User-agent: *\nDisallow: /');
    } else {
        res.end(`User-agent: *\nDisallow: /api/\nAllow /\nSitemap: ${basepath}/sitemap.xml`);
    }
};
