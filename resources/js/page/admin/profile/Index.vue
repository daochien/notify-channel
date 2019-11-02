<template>
    <div class="content-page">
        <div class="content">

            <!-- Start Content-->
            <div class="container-fluid">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box">
                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                                    <li class="breadcrumb-item"><a href="javascript: void(0);">Extras</a></li>
                                    <li class="breadcrumb-item active">Profile</li>
                                </ol>
                            </div>
                            <h4 class="page-title">Profile</h4>
                        </div>
                    </div>
                </div>
                <!-- end page title -->

                <div class="row">
                    <div class="col-lg-4 col-xl-4">
                        <div class="card-box text-center">
                            <img :src="user.avatar" class="rounded-circle avatar-lg img-thumbnail"
                                alt="profile-image">

                            <h4 class="mb-0">{{ user.name }}</h4>
                            <p class="text-muted">{{ user.email }}</p>

                            <button type="button" class="btn btn-success btn-xs waves-effect mb-2 waves-light">Follow</button>
                            <button type="button" class="btn btn-danger btn-xs waves-effect mb-2 waves-light">Message</button>

                            <div class="text-left mt-3">
                                <h4 class="font-13 text-uppercase">About Me :</h4>
                                <p class="text-muted font-13 mb-3">
                                    Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type.
                                </p>
                                <p class="text-muted mb-2 font-13"><strong>Full Name :</strong> <span class="ml-2">{{ user.name }}</span></p>

                                <p class="text-muted mb-2 font-13"><strong>Mobile :</strong><span class="ml-2">(123)
                                        123 1234</span></p>

                                <p class="text-muted mb-2 font-13"><strong>Email :</strong> <span class="ml-2 ">{{ user.email }}</span></p>

                                <p class="text-muted mb-1 font-13"><strong>Location :</strong> <span class="ml-2">VIET NAM</span></p>
                            </div>

                            <ul class="social-list list-inline mt-3 mb-0">
                                <li class="list-inline-item">
                                    <a href="javascript: void(0);" class="social-list-item border-primary text-primary"><i
                                            class="mdi mdi-facebook"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i
                                            class="mdi mdi-google"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="javascript: void(0);" class="social-list-item border-info text-info"><i
                                            class="mdi mdi-twitter"></i></a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i
                                            class="mdi mdi-github-circle"></i></a>
                                </li>
                            </ul>
                        </div> <!-- end card-box -->

                        <div class="card-box">
                            <h4 class="header-title mb-3">Inbox</h4>

                            <div class="inbox-widget slimscroll" style="max-height: 310px;">
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="/app/assets/images/users/user-2.jpg" class="rounded-circle" alt=""></div>
                                    <p class="inbox-item-author">Tomaslau</p>
                                    <p class="inbox-item-text">I've finished it! See you so...</p>
                                    <p class="inbox-item-date">
                                        <a href="javascript:(0);" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                    </p>
                                </div>
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="/app/assets/images/users/user-3.jpg" class="rounded-circle" alt=""></div>
                                    <p class="inbox-item-author">Stillnotdavid</p>
                                    <p class="inbox-item-text">This theme is awesome!</p>
                                    <p class="inbox-item-date">
                                        <a href="javascript:(0);" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                    </p>
                                </div>
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="/app/assets/images/users/user-4.jpg" class="rounded-circle" alt=""></div>
                                    <p class="inbox-item-author">Kurafire</p>
                                    <p class="inbox-item-text">Nice to meet you</p>
                                    <p class="inbox-item-date">
                                        <a href="javascript:(0);" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                    </p>
                                </div>

                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="/app/assets/images/users/user-5.jpg" class="rounded-circle" alt=""></div>
                                    <p class="inbox-item-author">Shahedk</p>
                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                    <p class="inbox-item-date">
                                        <a href="javascript:(0);" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                    </p>
                                </div>
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="/app/assets/images/users/user-6.jpg" class="rounded-circle" alt=""></div>
                                    <p class="inbox-item-author">Adhamdannaway</p>
                                    <p class="inbox-item-text">This theme is awesome!</p>
                                    <p class="inbox-item-date">
                                        <a href="javascript:(0);" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                    </p>
                                </div>

                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="/app/assets/images/users/user-3.jpg" class="rounded-circle" alt=""></div>
                                    <p class="inbox-item-author">Stillnotdavid</p>
                                    <p class="inbox-item-text">This theme is awesome!</p>
                                    <p class="inbox-item-date">
                                        <a href="javascript:(0);" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                    </p>
                                </div>
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="/app/assets/images/users/user-4.jpg" class="rounded-circle" alt=""></div>
                                    <p class="inbox-item-author">Kurafire</p>
                                    <p class="inbox-item-text">Nice to meet you</p>
                                    <p class="inbox-item-date">
                                        <a href="javascript:(0);" class="btn btn-sm btn-link text-info font-13"> Reply </a>
                                    </p>
                                </div>
                            </div> <!-- end inbox-widget -->

                        </div> <!-- end card-box-->

                    </div> <!-- end col-->

                    <div class="col-lg-8 col-xl-8">
                        <div class="card-box">
                            <ul class="nav nav-pills navtab-bg nav-justified">
                                <li class="nav-item">
                                    <a href="#aboutme" data-toggle="tab" aria-expanded="false" class="nav-link">
                                        About Me
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#timeline" data-toggle="tab" aria-expanded="true" class="nav-link">
                                        Timeline
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#settings" data-toggle="tab" aria-expanded="false" class="nav-link active">
                                        Settings
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">

                                <!-- end tab-pane -->
                                <about-me></about-me>
                                <!-- end about me section content -->
                                <time-line></time-line>
                                <!-- end timeline content-->
                                <setting></setting>
                                <!-- end settings content-->

                            </div> <!-- end tab-content -->
                        </div> <!-- end card-box-->

                    </div> <!-- end col -->
                </div>
                <!-- end row-->

            </div> <!-- container -->

        </div> <!-- content -->

        <!-- Footer Start -->
        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        2015 - 2019 &copy; UBold theme by <a href="">Coderthemes</a>
                    </div>
                    <div class="col-md-6">
                        <div class="text-md-right footer-links d-none d-sm-block">
                            <a href="javascript:void(0);">About Us</a>
                            <a href="javascript:void(0);">Help</a>
                            <a href="javascript:void(0);">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- end Footer -->

    </div>
</template>
<script>
import TimeLine from './TimeLine';
import Setting from './Setting';
import AboutMe from './AboutMe';

export default {
    components: {
        Setting,
        TimeLine,
        AboutMe
    },
    data() {
        return {
            user: window.__user__
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
