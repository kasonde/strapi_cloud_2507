import React, { ReactElement } from 'react';
import dayjs from 'dayjs';
import Calendar from 'dayjs/plugin/calendar';
import { Heading } from '../../primitives/Heading/Heading';
import { Link } from '../../primitives/Link/Link';
import { getPageUrl } from '../../../utils/getPageUrl';

interface NewsListProps {
    headline?: string | null;
    items: {
        id: string;
        attributes: {
            title: string;
            url: string;
            date: string;
        };
    }[];
    allNewsLinkText?: string;
    allNewsUrl?: string;
    detailUrl?: string;
}

const NewsList = ({
    headline,
    allNewsLinkText,
    items,
    allNewsUrl,
    detailUrl,
}: NewsListProps): ReactElement<NewsListProps, 'div'> | null => {
    dayjs.extend(Calendar);
    return (
        <div className="flex flex-col items-center">
            {headline && (
                <Heading tag={'h2'} className="mt-0 tablet:mt-8">
                    {headline}
                </Heading>
            )}
            <ul className="flex p-0 flex-wrap gap-x-4">
                {items?.map((item, i) => {
                    return (
                        <Link
                            key={`article-item-${i}`}
                            href={getPageUrl(detailUrl?.replace(':slug', item?.attributes?.url) || '')}
                        >
                            {item?.attributes.title}
                        </Link>
                    );
                })}
            </ul>
            {allNewsLinkText && <Link href={allNewsUrl}>{allNewsLinkText || ''}</Link>}
        </div>
    );
};

NewsList.whyDidYouRender = true;

export { NewsList };
