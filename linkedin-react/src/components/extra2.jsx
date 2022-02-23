<BrowserRouter>
  <MyNavbar query={query} setQuery={setQuery} />
  <Container>
    <Row>
      <Col xs={12} lg={9}>
        <Routes>
          <>
            <Route path="/search" element={<Search searchedQuery={query} />} />
            <Route
              path="/:userId"
              element={
                <div>
                  <ProfileMainHero />
                  <ProfileExperienceContainer />
                </div>
              }
            />
            <Route
              path="/me"
              element={
                <div>
                  <ProfileMainHero />
                  <ProfileExperienceContainer />
                </div>
              }
            />
          </>
        </Routes>
      </Col>
      <Col className="d-none d-lg-block" lg={3}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SidebarEdit />
                <ProfileList />
              </div>
            }
          />
        </Routes>
      </Col>
    </Row>
  </Container>
  <Footer />
</BrowserRouter>;
