import { InMemoryCache, makeVar } from '@apollo/client';
export const accessToken = makeVar("");
// Here we import our reactive variable which we declared in another
// component


// The field policies hold the initial cached state of a field.
export const clientCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                accessToken: {
                    read() {
                        return accessToken();
                    }
                }
            }
        }
    }
});