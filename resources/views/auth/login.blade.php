@extends('master', ['class' => 'authentication-bg authentication-bg-pattern'])
@section('title', 'login Page')

@push('css')
    <link href="{{asset('app/assets/css/custom_app.css')}}" rel="stylesheet" type="text/css" />
@endpush

@section('content')
    <div class="account-pages mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-pattern">

                        <div class="card-body p-4">

                            <div class="text-center w-75 m-auto">
                                <a href="index.html">
                                    <span><img src="{{asset('app/assets/images/logo-dark.png')}}" alt="" height="22"></span>
                                </a>

                            </div>
                            @if(session('error'))
                                <div class="error-page">
                                    <div class="alert alert-danger" role="alert">
                                        <i class="mdi mdi-block-helper mr-2"></i> {{ session('error') }}
                                    </div>
                                </div>
                            @endif

                            <form action="{{ route('signIn') }}" method="post" class="form-login">
                                @csrf
                                <div class="form-group mb-3">
                                    <label for="emailaddress">Email address</label>
                                    <input class="form-control" type="email" id="emailaddress" name="email" placeholder="Enter your email">
                                </div>

                                <div class="form-group mb-3">
                                    <label for="password">Password</label>
                                    <input class="form-control" type="password" name="password" id="password" placeholder="Enter your password">
                                </div>

                                <div class="form-group mb-3">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" name="remember_me" value="true" class="custom-control-input" id="checkbox-signin" checked>
                                        <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                                    </div>
                                </div>

                                <div class="form-group mb-0 text-center">
                                    <button class="btn btn-primary btn-block" type="submit"> Log In </button>
                                </div>

                            </form>

                            <div class="text-center">
                                <h5 class="mt-3 text-muted">Sign in with</h5>
                                <ul class="social-list list-inline mt-3 mb-0">
                                    <li class="list-inline-item">
                                        <a href="javascript: void(0);" class="social-list-item border-primary text-primary"><i class="mdi mdi-facebook"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="{{ route('google.login') }}" class="social-list-item border-danger text-danger"><i class="mdi mdi-google"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript: void(0);" class="social-list-item border-info text-info"><i class="mdi mdi-twitter"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i class="mdi mdi-github-circle"></i></a>
                                    </li>
                                </ul>
                            </div>

                        </div> <!-- end card-body -->
                    </div>
                    <!-- end card -->

                    <div class="row mt-3">
                        <div class="col-12 text-center">
                            <p> <a href="pages-recoverpw.html" class="text-white-50 ml-1">Forgot your password?</a></p>
                            <p class="text-white-50">Dont have an account? <a href="pages-register.html" class="text-white ml-1"><b>Sign Up</b></a></p>
                        </div>
                    </div>
                    <!-- end row -->

                </div> <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
    <footer class="footer footer-alt">
        2015 - 2019 &copy; UBold theme by <a href="" class="text-white-50">Coderthemes</a>
    </footer>
@endsection

@push('script')

@endpush

