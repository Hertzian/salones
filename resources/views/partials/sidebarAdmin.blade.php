<ul class="sidebar navbar-nav">
    <li class="nav-item active">
        <a class="nav-link" href="{{ url('/admin/getusers') }}">
        <i class="fas fa-user"></i>
        <span>Gestión de usuarios</span>
        </a>
    </li>
    {{-- <li class="nav-item">
        <a class="nav-link" href="{{ url('/admin/getlocation') }}">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Adicionar salones</span></a>
    </li> --}}
    <li class="nav-item">
        <a class="nav-link" href="{{ url('/admin/getsalones') }}">
        <i class="fas fa-fw fa-clipboard-list"></i>
        <span>Listado de salones</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ url('/admin/getpaquetes') }}">
        <i class="fas fa-fw fa-box"></i>
        <span>Listado de paquetes</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ url('/admin/getcalendar') }}">
        <i class="fas fa-fw fa-calendar"></i>
        <span>Calendario de eventos</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">
        <i class="fas fa-fw fa-credit-card"></i>
        <span>Gestión de pagos</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ url('/admin/gate') }}">
        <i class="fas fa-fw fa-lock"></i>
        <span>Control de puertas</span></a>
    </li>
    
    {{-- <li class="nav-item">
        <a class="nav-link" href="#">
        <i class="fas fa-fw fa-table"></i>
        <span>Galería de Imágenes</span></a>
    </li> --}}
    {{-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-fw fa-folder"></i>
        <span>Páginas</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <h6 class="dropdown-header">Login Screens:</h6>
        <a class="dropdown-item" href="login.html">Login</a>
        <a class="dropdown-item" href="register.html">Register</a>
        <a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
        <div class="dropdown-divider"></div>
        <h6 class="dropdown-header">Other Pages:</h6>
        <a class="dropdown-item" href="404.html">404 Page</a>
        <a class="dropdown-item" href="blank.html">Blank Page</a>
        </div>
    </li> --}}
</ul>