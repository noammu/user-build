import { redirect, type LoaderFunctionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';

export const action = async ({ request, params }: LoaderFunctionArgs) => {
    return redirect('/');
};

export default function Redirect() {
    return (
        <div>
            <div>
                <h1>Lets test redirect api</h1>
            </div>
            <Form method="post">
                <button type="submit" name="Go Home bruh" value="Go Home bruh">
                    Go Home bruh
                </button>
            </Form>
        </div>
    );
}
