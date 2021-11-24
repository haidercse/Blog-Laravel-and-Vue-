<!-- sidebar menu area start -->
        <div class="sidebar-menu">
            <div class="sidebar-header">
                <div class="logo">
                    <a href="index.html"><img src="{{ asset('admin/assets/images/icon/logo.png') }}" alt="logo"></a>
                </div>
            </div>
            <div class="main-menu">
                <div class="menu-inner">
                    <nav>
                        <ul class="metismenu" id="menu">
                            {{-- <li class="active">
                                <a href="javascript:void(0)" aria-expanded="true"><i class="ti-dashboard"></i><span>dashboard</span></a>
                                <ul class="collapse">
                                    <li class="active"><a href="#">Insert Data</a></li>
                                    <li><a href="#">Edit Product</a></li>
                                    <li><a href="#">Manage Category</a></li>
                                    <li><a href="#">Add Category</a></li>
                                </ul>
                            </li> --}}
                            <li  class="nav-item">
                                <router-link to="/admin/dashboard"  class="nav-link"><i class="fas fa-th"> Dashboard</i></router-link>
                            </li>
                            <li  class="nav-item">
                                <router-link to="/admin/category"  class="nav-link"><i class="fas fa-th"> Category</i></router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <!-- sidebar menu area end -->
