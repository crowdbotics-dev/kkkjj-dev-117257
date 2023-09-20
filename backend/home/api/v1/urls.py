from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import SDFGViewSet,JKFRiflesViewSet,JKFRiflesViewSet,SDFGViewSet,JKFRiflesViewSet,SDFGViewSet,JKFRiflesViewSet,SDFGViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('sdfg', SDFGViewSet )
router.register('jkfrifles', JKFRiflesViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
