<template>
    <div class="tab-pane show active" id="settings">
        <form>
            <h5 class="mb-4 text-uppercase"><i class="mdi mdi-account-circle mr-1"></i> Personal Info</h5>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label for="firstname">Full Name</label>
                        <input type="text" class="form-control" v-model="user.name" id="firstname" placeholder="Enter first name">
                    </div>
                </div>

            </div> <!-- end row -->

            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="userbio">Bio</label>
                        <textarea class="form-control" id="userbio" rows="4" placeholder="Write something..."></textarea>
                    </div>
                </div> <!-- end col -->
            </div> <!-- end row -->

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="useremail">Email Address</label>
                        <input type="email" v-model="user.email" class="form-control" id="useremail" placeholder="Enter email" disabled>
                        <span class="form-text text-muted"><small>If you want to change email please <a href="javascript: void(0);">click</a> here.</small></span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="userpassword">Password</label>
                        <input type="password" class="form-control" id="userpassword" placeholder="Enter password" disabled>
                        <span class="form-text text-muted"><small>If you want to change password please <a href="javascript: void(0);">click</a> here.</small></span>
                    </div>
                </div> <!-- end col -->
            </div> <!-- end row -->

            <h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-office-building mr-1"></i> Company Info</h5>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="companyname">Company Name</label>
                        <input type="text" class="form-control" v-model="company.name" id="companyname" placeholder="Enter company name">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="cwebsite">Website</label>
                        <input type="text" class="form-control" v-model="company.website" id="cwebsite" placeholder="Enter website url">
                    </div>
                </div> <!-- end col -->
            </div> <!-- end row -->

            <h5 class="mb-3 text-uppercase badge-success p-2"><i class="mdi mdi-earth mr-1"></i> Config notify</h5>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <form>
                                <div id="basicwizard">

                                    <ul class="nav nav-pills bg-light nav-justified form-wizard-header mb-4">
                                        <li class="nav-item">
                                            <a href="#notify_email" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active">
                                                <i class="mdi mdi-email mr-1"></i>
                                                <span class="d-none d-sm-inline">Email</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#notify_sms" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                                <i class="mdi mdi-cellphone mr-1"></i>
                                                <span class="d-none d-sm-inline">Sms</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#notify_web" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                                <i class="mdi mdi-web mr-1"></i>
                                                <span class="d-none d-sm-inline">Notify web</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#notify_facebook" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                                <i class="mdi mdi-facebook-box mr-1"></i>
                                                <span class="d-none d-sm-inline">Facebook</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#notify_telegaram" data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2">
                                                <i class="mdi mdi-telegram mr-1"></i>
                                                <span class="d-none d-sm-inline">Telegram</span>
                                            </a>
                                        </li>
                                    </ul>

                                    <div class="tab-content b-0 mb-0">
                                        <div class="tab-pane active" id="notify_email">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group row mb-3">
                                                        <label class="col-md-3 col-form-label" for="userName">Email</label>
                                                        <div class="col-md-9">
                                                            <input type="text" class="form-control" id="userName" v-model="config_notify.notify_email.email">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row mb-3">
                                                        <label class="col-md-3 col-form-label" for="password"> Password</label>
                                                        <div class="col-md-9">
                                                            <input type="password" id="password" class="form-control" v-model="config_notify.notify_email.password">
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->
                                            </div> <!-- end row -->
                                        </div>

                                        <div class="tab-pane" id="notify_sms">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="form-group row mb-3">
                                                        <label class="col-md-3 col-form-label" for="name"> First name</label>
                                                        <div class="col-md-9">
                                                            <input type="text" id="name" name="name" class="form-control" value="Francis">
                                                        </div>
                                                    </div>
                                                    <div class="form-group row mb-3">
                                                        <label class="col-md-3 col-form-label" for="surname"> Last name</label>
                                                        <div class="col-md-9">
                                                            <input type="text" id="surname" name="surname" class="form-control" value="Brinkman">
                                                        </div>
                                                    </div>

                                                    <div class="form-group row mb-3">
                                                        <label class="col-md-3 col-form-label" for="email">Email</label>
                                                        <div class="col-md-9">
                                                            <input type="email" id="email" name="email" class="form-control" value="cory1979@hotmail.com">
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->
                                            </div> <!-- end row -->
                                        </div>

                                        <div class="tab-pane" id="notify_web">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="text-center">
                                                        <h2 class="mt-0"><i class="mdi mdi-check-all"></i></h2>
                                                        <h3 class="mt-0">Thank you !</h3>

                                                        <p class="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                            mattis dictum aliquet.</p>

                                                        <div class="mb-3">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                <label class="custom-control-label" for="customCheck1">I agree with the Terms and Conditions</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->
                                            </div> <!-- end row -->
                                        </div>

                                        <div class="tab-pane" id="notify_facebook">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="text-center">
                                                        <h2 class="mt-0"><i class="mdi mdi-check-all"></i></h2>
                                                        <h3 class="mt-0">Thank you !</h3>

                                                        <p class="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                            mattis dictum aliquet.</p>

                                                        <div class="mb-3">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                <label class="custom-control-label" for="customCheck1">I agree with the Terms and Conditions</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->
                                            </div> <!-- end row -->
                                        </div>
                                        <div class="tab-pane" id="notify_telegram">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="text-center">
                                                        <h2 class="mt-0"><i class="mdi mdi-check-all"></i></h2>
                                                        <h3 class="mt-0">Thank you !</h3>

                                                        <p class="w-75 mb-2 mx-auto">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam
                                                            mattis dictum aliquet.</p>

                                                        <div class="mb-3">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                <label class="custom-control-label" for="customCheck1">I agree with the Terms and Conditions</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <!-- end col -->
                                            </div> <!-- end row -->
                                        </div>

                                    </div> <!-- tab-content -->
                                </div> <!-- end #basicwizard-->
                            </form>

                        </div> <!-- end card-body -->
                    </div> <!-- end card-->
                </div> <!-- end col -->
            </div>

            <div class="text-right">
                <button type="submit" class="btn btn-success waves-effect waves-light mt-2"><i class="mdi mdi-content-save"></i> Save</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: window.__user__,
            company: {
                name: 'Vccorp',
                website: 'https://vccorp.vn/'
            },
            config_notify: {
                notify_email: {
                    email: '',
                    password: ''
                },
                notify_sms: {},
                notify_web: {},
                notify_facebook: {},
                notify_telegram: {},

            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
