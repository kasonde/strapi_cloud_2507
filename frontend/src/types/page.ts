import { pageDetailQueryResponse } from '../relay/__generated__/pageDetailQuery.graphql';

export type PageProps = NonNullable<pageDetailQueryResponse['item'] & { url: string; id: string }>;

export interface IPage {
    data: {
        attributes: {
            url: string;
        };
    };
}
