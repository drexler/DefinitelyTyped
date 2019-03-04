// Type definitions for hellosign-sdk 1.3
// Project: https://github.com/HelloFax/hellosign-nodejs-sdk
// Definitions by: Andrew Quartey <https://github.com/drexler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace hellosign {


    interface Account {
        account: AccountDetail;
    }

    type AccountDetail = {
        account_id: string;
        email_address: string;
        is_locked: boolean;
        is_paid_hs: boolean;
        is_paid_hf: boolean;
        quotas: {
            template_left: number;
            documents_left: number;
            api_signature_requests_left: number;
        },
        callback_url: string | undefined;
        role_code: string | number | undefined;
    }
}
