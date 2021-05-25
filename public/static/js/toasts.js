const displayCopyToast = () => {
    toastr.options = {
        tapToDismiss: true,
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        onclick: null,
        showDuration: 500,
        hideDuration: 1000,
        timeOut: 3500,
        extendedTimeOut: 0,
        showEasing: 'swing',
        hideEasing: 'swing',
        showMethod: 'show',
        hideMethod: 'fadeOut',
        onHidden: undefined,
        newestOnTop: true
    };
    toastr.info(
        `<div class="toast-icon">
            <img class="copy-icon"></img>
        </div>
        <div class="toast-text">
            <div>
                Copied to clipboard!
            </div>
        </div>`
    );
}

const displaySignupToast = () => {
    toastr.options = {
        tapToDismiss: true,
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
        onclick: null,
        showDuration: 0,
        hideDuration: 0,
        timeOut: 1750,
        extendedTimeOut: 0,
        newestOnTop: true,
        onHidden: () => {
            location.assign('/login');
        },
    }
    toastr.success(
        `<div class=toast-icon>
            <img class="success-icon"></img>
        </div>
        <div class="toast-text">
            <div>
                Successfully registered
            </div>
            <div>
                Please log in
            </div>
        </div>`
    );
}

const displayLoginToast = () => {
    toastr.options = {
        tapToDismiss: true,
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: false,
        positionClass: 'toast-top-center',
        preventDuplicates: true,
        onclick: null,
        showDuration: 0,
        hideDuration: 0,
        timeOut: 1750,
        extendedTimeOut: 0,
        newestOnTop: true,
        onHidden: () => {
            location.assign('/');
        },
    }
    toastr.success(
        `<div class=toast-icon>
            <img class="success-icon"></img>
        </div>
        <div class="toast-text">
            <div>
                Successfully logged in
            </div>
            <div>
                Redirecting
            </div>
            <div>
                to homepage
            </div>
        </div>`
    );
}